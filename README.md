# 🛒 Teslo Shop - E-Commerce & Admin Panel

¡Hola! 👋 Les presento Teslo Shop, una aplicación web de comercio electrónico que armé para poner en práctica conceptos avanzados de **React 19+** y **TypeScript**. 

El objetivo principal de este proyecto no era solo armar una tienda, sino **optimizar el rendimiento al máximo**. Para lograrlo, evité usar `useEffect` y `useState` por todos lados y le delegué el trabajo pesado a herramientas modernas para manejar el estado global y la caché de las peticiones.

🔗 **[Puedes probar la app en vivo aquí](https://apptesloshop.netlify.app/)**

*(Nota: Puedes registrarte como usuario normal para probar la tienda. Por motivos de seguridad para proteger la base de datos, el acceso al panel administrativo está restringido en esta demo pública).*


---

## 🚀 ¿Qué vas a encontrar en esta app?

### 🛍️ De cara al usuario (La Tienda)
- **Filtros que de verdad funcionan:** Puedes filtrar los productos por género, talla, rango de precios o buscando por palabras. Todo esto lo manejé leyendo los parámetros de la URL (Query Parameters), así que si copias y pegas un link con filtros, la app te muestra exactamente eso.
- **Navegación rápida:** Paginación fluida para navegar por todo el catálogo sin que la app se trabe.
- **Diseño Responsive:** Armado con Tailwind CSS y componentes de ShadCN.

### ⚙️ De cara al Administrador (El Panel)
- **Autenticación con JWT:** Sistema de login seguro. Si no eres admin, las rutas están protegidas y no te dejan pasar.
- **Gestión total de productos (CRUD):** Puedes crear, editar o borrar productos de la base de datos real.
- **Subida de imágenes Drag & Drop:** Un componente personalizado donde puedes arrastrar y soltar imágenes para subirlas al backend.
- **Formularios a prueba de balas:** Usé React Hook Form para que las validaciones en tiempo real sean súper rápidas y amigables.

---

## 🛠️ Con qué está construido el proyecto

**En el Frontend:**
- **React 19+** y **TypeScript**
- **TanStack Query (React Query):** Para manejar las peticiones HTTP y la caché. Me ahorró muchísimos dolores de cabeza.
- **Zustand:** Para el estado global. Súper simple y potente.
- **React Hook Form:** Para controlar los formularios del panel admin.
- **React Router v7:** Manejo de rutas (usando HashRouter para que funcione perfecto en el deploy).
- **Tailwind CSS & ShadCN:** Para los estilos y componentes.

**En el Backend y Despliegues:**
- El backend real (API REST) está construido en **NestJS** y conectado a una base de datos **PostgreSQL**.
- **Docker** lo usé para levantar la base de datos mientras programaba en local.
- **Render:** Aquí está alojado el backend.
- **Neon Tech:** Aquí vive la base de datos en la nube.
- **Netlify:** Donde está subido este frontend.

---

## 👨‍💻 Sobre este proyecto
Desarrollé esta aplicación como proyecto de cierre para la última actualización del curso "React de cero a experto" de Fernando Herrera (DevTalles). Fue un reto genial conectar todo un frontend optimizado con un backend real y mandarlo todo a producción.