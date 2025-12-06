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

