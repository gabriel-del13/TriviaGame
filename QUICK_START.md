# Inicio Rápido - Despliegue en EC2

## Pasos Rápidos

### 1. En tu máquina local

1. **Crea el archivo `.env` en la raíz del proyecto** (copia de `env.prod.example`):
```bash
cp env.prod.example .env
```

2. **Edita el `.env`** y configura:
   - `POSTGRES_PASSWORD`: Una contraseña segura para PostgreSQL
   - `JWT_SECRET`: Un secreto seguro para JWT (puedes generar uno con: `openssl rand -base64 32`)
   - `ADMIN_PASSWORD`: Contraseña para el usuario admin
   - `VITE_API_URL`: La IP pública de tu EC2 (ejemplo: `http://54.123.45.67`)

### 2. En la EC2

```bash
# 1. Conectarse a EC2
ssh -i tu-clave.pem ubuntu@TU_IP_PUBLICA_EC2

# 2. Instalar Docker (si no está instalado)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# 3. Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 4. Subir el código (Git o SCP)
git clone TU_REPOSITORIO
# O
scp -i tu-clave.pem -r . ubuntu@TU_IP_PUBLICA_EC2:/home/ubuntu/TriviaGame

# 5. Ir al directorio
cd TriviaGame

# 6. Crear el archivo .env (copia los valores de tu máquina local)
nano .env

# 7. Dar permisos al script de despliegue
chmod +x deploy.sh

# 8. Ejecutar despliegue
./deploy.sh
```

### 3. Configurar Grupo de Seguridad en AWS

En la consola de EC2 → Security Groups:
- Agregar regla: **HTTP, Puerto 80, Origen 0.0.0.0/0**

### 4. Acceder a la aplicación

Abre en tu navegador: `http://TU_IP_PUBLICA_EC2`

## Archivos Importantes

- `docker-compose.prod.yml`: Configuración de Docker para producción
- `.env`: Variables de entorno (NO subir a Git)
- `env.prod.example`: Plantilla de variables de entorno
- `DEPLOY.md`: Guía completa de despliegue
- `deploy.sh`: Script automatizado de despliegue

## Notas Importantes

⚠️ **NUNCA subas el archivo `.env` a Git** - contiene contraseñas y secretos

⚠️ **Cambia todas las contraseñas por defecto** antes de desplegar

⚠️ **El `VITE_API_URL` debe ser la IP pública de tu EC2** (sin barra al final)

