# GCP Deployment (Cloud Run)

## Prereqs
- GCP project with billing.
- Artifact Registry enabled.
- Cloud Run, Cloud Build, Cloud SQL Admin, Secret Manager enabled.
- Authenticated gcloud with project set: `gcloud config set project <PROJECT_ID>`.

## Build & push images
```bash
# Frontend
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/anirudhlabs/frontend:latest ./frontend

# CMS
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/anirudhlabs/cms:latest ./cms
```

## Cloud SQL (Postgres)
- Create instance and DB `strapi`, user/password.
- Note `INSTANCE_CONNECTION_NAME`.

## Secrets / env (store in Secret Manager or Cloud Run env)
- APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, JWT_SECRET
- DATABASE_CLIENT=postgres
- DATABASE_HOST=/cloudsql/$INSTANCE_CONNECTION_NAME
- DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD
- FRONTEND_URL=https://www.anirudhlabs.in
- NEXT_PUBLIC_API_URL=https://cms-<project>.run.app

## Deploy CMS
```bash
gcloud run deploy anirudhlabs-cms \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/anirudhlabs/cms:latest \
  --region $REGION \
  --add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
  --set-env-vars APP_KEYS=$APP_KEYS,API_TOKEN_SALT=$API_TOKEN_SALT,ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET,JWT_SECRET=$JWT_SECRET,DATABASE_CLIENT=postgres,DATABASE_HOST=/cloudsql/$INSTANCE_CONNECTION_NAME,DATABASE_NAME=$DB_NAME,DATABASE_USERNAME=$DB_USER,DATABASE_PASSWORD=$DB_PASS,FRONTEND_URL=https://www.anirudhlabs.in \
  --allow-unauthenticated
```

## Deploy Frontend
```bash
gcloud run deploy anirudhlabs-frontend \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/anirudhlabs/frontend:latest \
  --region $REGION \
  --set-env-vars NEXT_PUBLIC_API_URL=https://cms-<project>.run.app \
  --allow-unauthenticated
```

## Domain
- Map `www.anirudhlabs.in` to frontend Cloud Run service via Domain Mappings.
- Ensure SSL provisioned; update DNS per mapping instructions.

## GitHub Actions deployment (Cloud Run)
The workflow `.github/workflows/deploy-gcp.yml` builds images with Cloud Build and deploys to Cloud Run.

Required GitHub variables (`Repository > Settings > Variables > Actions`):
- `GCP_PROJECT_ID` — target project
- `GCP_REGION` — e.g. `us-central1`
- `GCP_ARTIFACT_REGISTRY_REPO` — e.g. `anirudhlabs`
- `GCP_FRONTEND_SERVICE` — Cloud Run service name for frontend
- `GCP_CMS_SERVICE` — Cloud Run service name for CMS
- `GCP_CLOUD_SQL_CONNECTION` — Cloud SQL instance connection string `project:region:instance`
- `FRONTEND_URL` — canonical site URL (e.g. `https://www.anirudhlabs.in`)
- `NEXT_PUBLIC_API_URL` — public API URL for the frontend (or set as secret)

Required GitHub secrets (`Repository > Settings > Secrets > Actions`):
- `GCP_WORKLOAD_IDENTITY_PROVIDER` — workload identity provider resource
- `GCP_SERVICE_ACCOUNT` — deployer service account email
- `CMS_APP_KEYS`, `CMS_API_TOKEN_SALT`, `CMS_ADMIN_JWT_SECRET`, `CMS_JWT_SECRET`
- `DB_NAME`, `DB_USER`, `DB_PASSWORD`
- `NEXT_PUBLIC_API_URL` (if not provided as variable)

Permissions required for the deployer service account:
- Artifact Registry writer
- Cloud Build editor (or Cloud Build build + Cloud Build service account user)
- Cloud Run admin
- Service Account Token Creator (for WIF)
- Cloud SQL Client

