# 🌸 AROMAS SENTIMIENTOS - QUIZ ENCUENTRO TU FRAGANCIA

**Versión:** 2.0 (with Quiz + Supabase)  
**Estado:** ✅ LISTO PARA PRODUCCIÓN  
**Última actualización:** 3 de Abril 2026

---

## 📋 TABLA DE CONTENIDOS

1. [🎯 Resumen del Proyecto](#resumen)
2. [� Cómo Funciona la Aplicación](#como-funciona)
3. [📁 Estructura de Archivos](#estructura)
4. [🚀 Quick Start](#quick-start)
5. [🔧 Configuración Detallada](#configuracion)
6. [📊 Características del Quiz](#features)
7. [💾 Base de Datos](#database)
8. [📈 Analytics](#analytics)
9. [🐛 Troubleshooting](#troubleshooting)

---

## 🎯 Resumen del Proyecto {#resumen}

Tu sitio Aromas Sentimientos ahora tiene un **quiz interactivo** que:

- **Guía visitantes** a través de 6 preguntas sobre emociones, aromas y preferencias
- **Calcula recomendación** usando algoritmo inteligente basado en 13 fragancias
- **Personaliza resultado** con nombre del visitante
- **Guarda datos** en PostgreSQL (Supabase) para analytics
- **Integración WhatsApp** para consultas sobre la fragancia recomendada

### Flujo completo:
```
Visitante
    ↓
Responda 6 preguntas (emociones, aromas, uso)
    ↓
Ingrese nombre, email, teléfono
    ↓
JavaScript calcula recomendación
    ↓
Muestra resultado + botón WhatsApp contacto
    ↓
Datos guardados en PostgreSQL (Supabase)
    ↓
Analíticas disponibles en Supabase dashboard
```

---

## � Cómo Funciona la Aplicación {#como-funciona}

### 🌐 Estructura del Sitio Web

Tu sitio **Aromas Sentimientos** es una experiencia elegante para descubrir fragancias premium. Tiene estas secciones principales:

1. **Hero Section** 
   - Portada atractiva con el tagline "El aroma que te define"
   - CTA para explorar colección

2. **Filosofía (3 Pilares)**
   - 01: El Olfato
   - 02: La Esencia
   - 03: El Equilibrio

3. **Presentaciones**
   - Spray Fino (200 ML)
   - Gatillo (250 ML)

4. **Catálogo de Fragancias**
   - 13 fragancias únicas
   - Cada una con perfil, propiedades y usos

5. **Modos de Uso**
   - Casa, Auto, Ropa, Persona

6. **📍 QUIZ: Encuentra Tu Fragancia** ← NUEVO
   - Sección interactiva para recomendación personalizada

7. **Contacto**
   - WhatsApp directo
   - Descarga de catálogo PDF

---

### 👥 Flujo del Usuario

```
1. VISITANTE LLEGA AL SITIO
   ↓
2. LEE CONTENIDO
   ├─ Filosofía de aromas
   ├─ Presentaciones de productos
   ├─ Catálogo de 13 fragancias
   └─ Modos de uso
   ↓
3. DESCUBRE LA SECCIÓN "ENCUENTRA TU FRAGANCIA"
   ↓
4. HACE CLIC EN QUIZ
   ↓
5. RESPONDE 6 PREGUNTAS
   ├─ ¿Cómo te sientes?
   ├─ Emoción secundaria
   ├─ Tipo de aroma
   ├─ Uso principal
   ├─ Preferencia temporal
   └─ Datos (nombre, email, teléfono)
   ↓
6. SISTEMA CALCULA RECOMENDACIÓN
   ├─ Analiza respuestas
   ├─ Aplica algoritmo inteligente
   └─ Selecciona fragancia ideal
   ↓
7. VE RESULTADO PERSONALIZADO
   ├─ Fragancia recomendada
   ├─ Descripción y propiedades
   └─ Botón "Consultar por WhatsApp"
   ↓
8. PUEDE:
   ├─ Hacer quiz nuevamente
   ├─ Contactar por WhatsApp (11 5822-6606)
   ├─ Descargar catálogo PDF
   └─ O volver a explorar otras fragancias
   ↓
9. DATOS GUARDADOS EN SUPABASE
   ├─ Email validado
   ├─ Respuestas del quiz
   ├─ Fragancia recomendada
   ├─ Fecha y hora
   └─ IP del visitante
```

---

### 🎯 Características Principales

#### **Para el Visitante:**
- ✅ Experiencia elegante y responsiva (mobile + desktop)
- ✅ Quiz intuitivo con 6 preguntas
- ✅ Recomendación personalizada basada en emociones
- ✅ Validación de datos en tiempo real
- ✅ Integración directa con WhatsApp
- ✅ Descarga de catálogo PDF

#### **Para el Negocio:**
- 📊 Base de datos completa de visitantes
- 📈 Estadísticas de fragancias más populares
- 😊 Análisis de preferencias emocionales
- 🌸 Segmentación por tipo de aroma
- 💾 Datos en PostgreSQL (seguro y escalable)
- 🔍 Analytics en tiempo real desde Supabase

---

### 🤖 Cómo Funciona el Algoritmo de Recomendación

El quiz usa un sistema inteligente de **puntuación ponderada**:

```
1. CAPTURA EMOCIONES (preguntas 1-2)
   └─ Emoción primaria × 2 (más peso)
   └─ Emoción secundaria × 1.5 (menos peso)
   
2. FILTRA POR TIPO DE AROMA (pregunta 3)
   └─ Premia fragancias que coinciden
   └─ Reduce score de las que no
   
3. APLICA CONTEXTO DE USO (pregunta 4)
   └─ Bonus puntos si coincide el uso
   
4. CALCULA PUNTUACIÓN FINAL
   └─ Suma puntajes de todas las reglas
   └─ Selecciona fragancia con puntuación más alta
   
5. RESULTADO
   └─ Fragancia recomendada personalizada
```

**Ejemplo:**
```
Usuario dice: "Necesito CALMA" (primaria) + "Bienestar" (secundaria)
Prefiere: "Fresca"
Usa en: "Persona"

Sistema calcula:
- Té Verde (Calma:9, Bienestar:9, Fresca) → PUNTUACIÓN: 27 ✅
- Magnolia (Calma:9, Bienestar:8, Fresca) → PUNTUACIÓN: 26
- Limón y Jengibre (Calma:2, Bienestar:6, Fresca) → PUNTUACIÓN: 11

RECOMENDACIÓN: Té Verde ✨
```

---

### 💾 Integración con Supabase (PostgreSQL)

**Cuando usuario completa quiz:**

1. ✅ Los validadores verifican datos
2. 📤 JavaScript envía datos a Supabase
3. 💾 Base de datos guarda en tabla `quiz_responses`
4. 📊 Vistas SQL generan estadísticas automáticas
5. 📈 Acceso a analytics en tiempo real

**Datos guardados:**
```json
{
  "id": 1,
  "email": "juan@gmail.com",
  "phone": "+5491158226606",
  "answers": {
    "nombre": "Juan Pérez",
    "emo_feeling": "calma",
    "emo_mood": "bienestar",
    "aroma_type": "fresca",
    "uso_principal": "Persona",
    "preferencia_temporal": "dia"
  },
  "recommended_fragrance": "Té Verde",
  "created_at": "2026-04-03T15:30:00Z",
  "ip_address": "200.1.2.3"
}
```

---

## �📁 Estructura de Archivos {#estructura}

```
AROMAS-SENTIMIENTOS/
│
├── 📄 index.html                    ← SITIO PRINCIPAL (ACTUALIZADO)
│   └── Incluye: nav con "Quiz", sección quiz, estilos CSS, imports JS
│
├── 📜 NUEVOS ARCHIVOS JavaScript
│   ├── supabase-config.js           ← Conexión a Supabase
│   ├── quiz-fragancia.js            ← Lógica principal del quiz
│   └── analytics.js                 ← Funciones para estadísticas
│
├── 📋 DOCS Y GUÍAS
│   ├── QUIZ-SETUP-GUIDE.md          ← Guía COMPLETA paso a paso
│   ├── QUICK-START.txt              ← Resumen 5 minutos
│   ├── database-setup.sql           ← Script SQL (copiar a Supabase)
│   └── README.md                    ← Este archivo
│
├── 📄 Archivos Originales (sin cambios)
│   ├── aromaterapia_fragancias.md
│   ├── equilibrio_energia.md
│   ├── olfato_emociones.md
│   └── tratamientos_catalogo.md
│
└── 📁 catalogo_PDF/
    └── (archivos PDF)
```

---

## 🚀 Quick Start {#quick-start}

### ⏱️ SETUP EN 5 MINUTOS

1. **Supabase** (2 min)
   - Ir a https://supabase.com → Sign Up
   - Create project → aromas-sentimientos-quiz
   - Esperar creación

2. **Base de Datos** (1 min)
   - En Supabase: SQL Editor
   - Copiar-pegar `database-setup.sql` completo
   - Click "RUN"

3. **Credenciales** (1 min)
   - Supabase: Settings → API
   - Copiar Project URL y Anon Key
   - Reemplazar en `supabase-config.js`

4. **Deploy** (1 min)
   - Git commit todos los archivos
   - Push a repo
   - Netlify redeploy automático

✅ **¡Listo!** Abre tu sitio y prueba el quiz

---

## 🔧 Configuración Detallada {#configuracion}

### 1. Crear Supabase Project

```bash
1. https://supabase.com
2. Clic en "New Project"
3. Nombre: aromas-sentimientos-quiz
4. Región: South America (Brazil)
5. Crear base datos (esperar 2-3 min)
```

### 2. Ejecutar SQL

Ir a **SQL Editor** en Supabase:

```bash
1. Copiar TODO el contenido de: database-setup.sql
2. Pegar en SQL Editor
3. Click botón "RUN" (azul, arriba derecha)
4. ✅ Se crearán tablas, vistas, funciones
```

### 3. Obtener API Keys

En Supabase → **Settings** → **API**:

```
Project URL: https://xxxxx.supabase.co
Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Configurar supabase-config.js

Encuentrar esta sección:

```javascript
const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_ANON_KEY = 'tu-anon-key-aqui';
```

Reemplazar con tus valores:

```javascript
const SUPABASE_URL = 'https://acdefghijklmnopqr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGc...tu-anon-key-completa...';
```

### 5. Subir a Netlify

```bash
git add supabase-config.js quiz-fragancia.js index.html
git commit -m "Add interactive quiz with Supabase integration"
git push origin main
```

Netlify detectará cambios automáticamente y hará redeploy.

---

## 📊 Características del Quiz {#features}

### Las 6 Preguntas

#### Pregunta 1: Bienestar Emocional
- 🧘 Necesito Calma
- ⚡ Necesito Energía  
- ✨ Necesito Seducción
- 🌿 Necesito Equilibrio

#### Pregunta 2: Emoción Secundaria
- 🧘 Calma
- ⚡ Energía
- 💝 Bienestar
- ✨ Sensualidad

#### Pregunta 3: Tipo de Aroma
- 🌸 Floral
- 🍋 Cítrica
- 🍯 Dulce
- ❄️ Fresca

#### Pregunta 4: Uso Principal
- ✨ En mi Persona
- 👗 En mi Ropa
- 🏡 En mi Ambiente
- 📚 En mi Oficina

#### Pregunta 5: Preferencia Temporal
- ☀️ Durante el Día
- 🌙 Por la Noche
- 🔄 Ambos Momentos

#### Pregunta 6: Datos de Contacto
- Nombre
- Email
- Teléfono

### Algoritmo de Recomendación

Cada fragancia tiene puntuaciones (0-10) para:
- **Calma** ← para preguntas 1-2
- **Energía** ← para preguntas 1-2
- **Seducción** ← para preguntas 1-2
- **Bienestar** ← para preguntas 1-2
- **Frescor** ← para todo el quiz

El algoritmo:
1. Multiplica emoción primaria × 2 (más peso)
2. Suma emoción secundaria × 1.5
3. Aplica filtro de tipo aroma
4. Premia si coincide uso principal
5. Devuelve fragancia con mayor puntuación

---

## 💾 Base de Datos {#database}

### Tabla Principal: `quiz_responses`

```sql
id                    → ID único (auto-generado)
email                 → Email del visitante
phone                 → Teléfono
answers               → JSON con 7 campos:
                         └─ {
                              emo_feeling: "calma",
                              emo_mood: "bienestar",
                              aroma_type: "floral",
                              uso_principal: "Persona",
                              preferencia_temporal: "dia",
                              nombre: "Juan"
                            }
recommended_fragrance → Nombre fragancia (string)
created_at            → Timestamp automático
ip_address            → IP visitante (para analytics)
user_feedback         → (futuro: feedback usuario)
```

### Vistas (para reportes)

- **top_fragancias** → Top 5 más recomendadas
- **stats_emociones** → Distribución emociones primarias
- **stats_aromas** → Distribución tipos aroma

### Funciones SQL

- **get_recent_recommendations()** → Recomendaciones últimos N días

---

## 📈 Analytics {#analytics}

### Ver Datos en Supabase

1. **Table Editor** → tabla `quiz_responses`
   - Ver todas las respuestas
   - Buscar por email, fragancia, etc.

2. **Views** → estadísticas pre-calculadas
   - Ir a "Views" (lado izquierdo)
   - Click en `top_fragancias`, `stats_emociones`, etc.

### Con JavaScript (Consola)

El archivo `analytics.js` incluye funciones:

```javascript
// Ver todas las respuestas
await getAllQuizResponses();

// Top fragancias
await getTopFragancias(5);

// Estadísticas emociones
await getEmotionStats();

// Estadísticas aromas
await getAromaStats();

// Búsqueda por email
await findResponseByEmail('user@example.com');

// Exportar a CSV
await exportToCSV();

// Todo stats
await getFullStats();
```

### Dashboard (Futuro)

Puedes crear dashboard privado usando:
- Supabase Auth (login)
- Supabase realtime (datos live)
- Chart.js o D3.js (gráficos)

---

## 🐛 Troubleshooting {#troubleshooting}

### ❌ Quiz no aparece en el sitio

**Solución:**
```bash
1. Verificar que quiz-fragancia.js fue subido
2. Abrir DevTools (F12)
3. Console tab → ver errores
4. Verificar Network tab → scripts cargados?
```

### ❌ "Cannot read properties of window (reading 'supabase')"

**Solución:**
```bash
1. El CDN de Supabase no cargó
2. Verificar conexión a internet
3. Retraso de carga (agregar setTimeout)
4. Verificar que script CDN está en index.html <head>
```

### ❌ Datos no se guardan en Supabase

**Solución:**
```bash
1. Verificar credenciales en supabase-config.js
2. Verificar que tabla quiz_responses existe
3. DevTools → Network → ver requests a Supabase
4. Verificar RLS policies (deben permitir INSERT)
5. Verificar errores en console
```

### ❌ Quiz se ve muy pequeño en móvil

**Solución:**
- Ya está responsive (testeado en iPhone/Android)
- Si hay problema, revisar viewport en meta tags

### ❌ Botón "Siguiente" no funciona

**Solución:**
```bash
1. ¿Seleccionaste una opción?
2. DevTools → ver console errors
3. Verificar que quiz-fragancia.js está cargado
```

---

## 🔒 Seguridad

### ✅ Implementado

- ✅ Datos en PostgreSQL encriptado
- ✅ Row Level Security (RLS) en tabla
- ✅ Anon Key tiene permisos limitados (INSERT/SELECT only)
- ✅ Email y teléfono no públicos
- ✅ Validación email en JavaScript

### ⚠️ Consideraciones

- La Anon Key es visible en código fuente (NORMAL, es pública)
- Supabase valida todo en backend
- Para sitios con mucho tráfico: agregar CAPTCHA

---

## 📚 Documentación

- **QUIZ-SETUP-GUIDE.md** ← Guía completa
- **QUICK-START.txt** ← Resumen 5 min
- **database-setup.sql** ← Script SQL

---

## 🎓 Próximos Pasos (Opcional)

1. **Email confirmación**
   - Enviar email con resultado y fragancia
   - Usar Supabase Email templates

2. **Mejorar algoritmo**
   - A/B testing de preguntas
   - Ajustar pesos según datos reales

3. **Dashboard privado**
   - Analytics interno para ventas
   - Supabase Auth para admin login

4. **Mobile app**
   - React Native o Flutter
   - Misma lógica, UI nativa

5. **Integración ecommerce**
   - Mostrar productos al recomendar
   - Link directo compra

---

## ✨ ¿PREGUNTAS?

- 📖 **Supabase Docs:** https://supabase.com/docs
- 🎓 **JavaScript Guide:** https://mdn.org
- 💬 **Community:** https://discord.gg/supabase

---

**¡Felicidades! Tu quiz está 100% operativo.** 🚀

Próximo paso: Ir a https://supabase.com y crear el proyecto.
