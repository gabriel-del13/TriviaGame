#!/bin/bash

# Script de despliegue para EC2
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando despliegue de TriviaGame..."

# Verificar que existe el archivo .env
if [ ! -f .env ]; then
    echo "❌ Error: No se encontró el archivo .env"
    echo "Por favor, crea el archivo .env basándote en env.prod.example"
    exit 1
fi

# Verificar que Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker no está instalado"
    exit 1
fi

# Verificar que Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Error: Docker Compose no está instalado"
    exit 1
fi

echo "📦 Construyendo imágenes..."
docker-compose -f docker-compose.prod.yml build

echo "🛑 Deteniendo contenedores existentes (si existen)..."
docker-compose -f docker-compose.prod.yml down

echo "🚀 Iniciando contenedores..."
docker-compose -f docker-compose.prod.yml up -d

echo "⏳ Esperando a que los servicios estén listos..."
sleep 10

echo "📊 Estado de los contenedores:"
docker-compose -f docker-compose.prod.yml ps

echo "✅ Despliegue completado!"
echo "📝 Ver logs con: docker-compose -f docker-compose.prod.yml logs -f"
echo "🌐 Tu aplicación debería estar disponible en: http://$(curl -s ifconfig.me)"

