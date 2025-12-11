# Postgres Setup Guide for Django Migration

This guide provides step-by-step instructions for setting up Postgres for the Django migration, both locally and on Heroku.

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Django Configuration](#django-configuration)
3. [Heroku Postgres Setup](#heroku-postgres-setup)
4. [Common Commands](#common-commands)
5. [Troubleshooting](#troubleshooting)

---

## Local Development Setup

### macOS (using Homebrew)

```bash
# 1. Install Postgres
brew install postgresql@15

# 2. Start Postgres service
brew services start postgresql@15

# 3. Verify installation
psql --version

# 4. Create database
createdb pythoness_db

# 5. Create user (optional - you can use your system user)
createuser pythoness_user -P
# When prompted, enter a password

# 6. Grant permissions
psql pythoness_db
```

In the psql prompt:
```sql
GRANT ALL PRIVILEGES ON DATABASE pythoness_db TO pythoness_user;
\q
```

### Alternative: Using Postgres.app (macOS)

1. Download from [postgresapp.com](https://postgresapp.com/)
2. Install and launch the app
3. Click "Initialize" to create a new server
4. The app will create a default database with your username
5. Use the default connection settings in Django

### Linux (Ubuntu/Debian)

```bash
# 1. Update package list
sudo apt-get update

# 2. Install Postgres
sudo apt-get install postgresql postgresql-contrib

# 3. Start Postgres service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# 4. Switch to postgres user
sudo -u postgres psql
```

In the psql prompt:
```sql
-- Create database
CREATE DATABASE pythoness_db;

-- Create user
CREATE USER pythoness_user WITH PASSWORD 'your_secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE pythoness_db TO pythoness_user;

-- Exit
\q
```

### Windows

1. **Download Postgres:**
   - Visit [postgresql.org/download/windows](https://www.postgresql.org/download/windows/)
   - Download the installer
   - Run the installer and follow the setup wizard
   - Remember the password you set for the `postgres` user

2. **Using pgAdmin (GUI):**
   - Open pgAdmin (installed with Postgres)
   - Right-click "Databases" → "Create" → "Database"
   - Name: `pythoness_db`
   - Right-click "Login/Group Roles" → "Create" → "Login/Group Role"
   - Name: `pythoness_user`, set password
   - Go to "Privileges" tab and grant all permissions

3. **Using Command Line (psql):**
   ```sql
   -- Connect as postgres user
   psql -U postgres
   
   -- Create database
   CREATE DATABASE pythoness_db;
   
   -- Create user
   CREATE USER pythoness_user WITH PASSWORD 'your_password';
   
   -- Grant privileges
   GRANT ALL PRIVILEGES ON DATABASE pythoness_db TO pythoness_user;
   ```

---

## Django Configuration

### 1. Install Required Packages

Add to `requirements.txt`:
```txt
psycopg2-binary>=2.9.9
dj-database-url>=2.1.0
python-decouple>=3.8
```

Install:
```bash
pip install psycopg2-binary dj-database-url python-decouple
```

### 2. Update Django Settings

```python
# settings/base.py
import dj_database_url
from decouple import config
import os

# Database configuration
# For local development, you can use a .env file
# For production, Heroku sets DATABASE_URL automatically

DATABASES = {
    'default': dj_database_url.config(
        default=config(
            'DATABASE_URL',
            default=f"postgresql://pythoness_user:your_password@localhost:5432/pythoness_db"
        ),
        conn_max_age=600,
        conn_health_checks=True,
    )
}
```

### 3. Create .env File (Local Development)

Create a `.env` file in your project root (add to `.gitignore`):

```env
# .env
DATABASE_URL=postgresql://pythoness_user:your_password@localhost:5432/pythoness_db
SECRET_KEY=your-secret-key-here
DEBUG=True
```

### 4. Run Migrations

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser (for Django admin)
python manage.py createsuperuser
```

---

## Heroku Postgres Setup

### 1. Add Postgres Addon

```bash
# Add Postgres (free tier for testing)
heroku addons:create heroku-postgresql:mini

# For production, use a paid tier:
# heroku addons:create heroku-postgresql:standard-0
```

### 2. Verify Database URL

Heroku automatically sets the `DATABASE_URL` environment variable:

```bash
# Check the DATABASE_URL
heroku config:get DATABASE_URL

# View all config vars
heroku config
```

### 3. Run Migrations on Heroku

```bash
# Run migrations
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser
```

### 4. Access Heroku Postgres Database

```bash
# Connect to Heroku Postgres via psql
heroku pg:psql

# Or get connection string for external tools
heroku pg:credentials:url
```

---

## Common Commands

### Database Management

```bash
# Connect to database
psql pythoness_db

# Or with user
psql -U pythoness_user -d pythoness_db
```

### Inside psql

```sql
-- List all databases
\l

-- Connect to a database
\c pythoness_db

-- List all tables
\dt

-- Describe a table structure
\d table_name

-- List all users
\du

-- Show current database
SELECT current_database();

-- Exit psql
\q
```

### Django Management Commands

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Show migration status
python manage.py showmigrations

# Rollback last migration
python manage.py migrate app_name previous_migration_number

# Create superuser
python manage.py createsuperuser

# Open Django shell with database access
python manage.py shell
```

### Heroku Commands

```bash
# View database info
heroku pg:info

# View database size
heroku pg:info --app your-app-name

# Create database backup
heroku pg:backups:capture

# Download backup
heroku pg:backups:download

# Restore from backup
heroku pg:backups:restore BACKUP_URL DATABASE_URL

# Reset database (⚠️ DESTRUCTIVE)
heroku pg:reset DATABASE_URL
```

---

## Troubleshooting

### Connection Issues

**Error: "could not connect to server"**
- Check if Postgres is running: `brew services list` (macOS) or `sudo systemctl status postgresql` (Linux)
- Verify connection string format: `postgresql://user:password@host:port/database`
- Check firewall settings

**Error: "password authentication failed"**
- Verify username and password
- Check `pg_hba.conf` file for authentication settings
- Try resetting password: `ALTER USER pythoness_user WITH PASSWORD 'new_password';`

**Error: "database does not exist"**
- Create the database: `createdb pythoness_db`
- Or create via psql: `CREATE DATABASE pythoness_db;`

### Django Migration Issues

**Error: "relation does not exist"**
- Run migrations: `python manage.py migrate`
- Check if app is in `INSTALLED_APPS`

**Error: "no such table"**
- Run migrations: `python manage.py migrate`
- Check migration files exist in `app/migrations/`

### Heroku Issues

**Error: "DATABASE_URL not set"**
- Add Postgres addon: `heroku addons:create heroku-postgresql:mini`
- Verify: `heroku config:get DATABASE_URL`

**Error: "Connection timeout"**
- Check Heroku app status: `heroku ps`
- Verify Postgres addon is active: `heroku addons`

---

## Quick Reference: Connection Strings

### Local Development
```
postgresql://username:password@localhost:5432/database_name
```

### Heroku (automatic)
```
postgres://[user]:[password]@[host]:[port]/[database]
```
(Set automatically by Heroku Postgres addon)

### Example .env File
```env
# Local Development
DATABASE_URL=postgresql://pythoness_user:mypassword@localhost:5432/pythoness_db

# Production (Heroku sets this automatically)
# DATABASE_URL is set by Heroku Postgres addon
```

---

## Next Steps

1. ✅ Postgres installed and running locally
2. ✅ Database and user created
3. ✅ Django settings configured
4. ✅ Migrations run successfully
5. ✅ Superuser created
6. ✅ Heroku Postgres addon added (when ready to deploy)

---

## Resources

- [Postgres Documentation](https://www.postgresql.org/docs/)
- [Django Database Documentation](https://docs.djangoproject.com/en/stable/topics/db/)
- [dj-database-url Documentation](https://github.com/jacobian/dj-database-url)
- [Heroku Postgres Documentation](https://devcenter.heroku.com/articles/heroku-postgresql)

---

**Need Help?** If you run into issues, check:
1. Postgres service is running
2. Connection string format is correct
3. User has proper permissions
4. Database exists
5. Django settings are configured correctly
