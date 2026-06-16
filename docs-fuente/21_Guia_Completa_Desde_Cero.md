# Guía completa desde 0 — construir suggestion.pe con Claude Code (Windows)

Esta guía asume que partes de cero. Va en orden. Lo que se instala (parte A) es **una sola vez**; de la parte B en adelante es el flujo del proyecto.

---

## A. Instalar lo necesario (una sola vez)

Necesitas **tres** cosas. Las dos primeras son para que el sitio web funcione; la tercera es el asistente que escribe el código.

### A1. Node.js (motor del sitio Next.js)
Aunque Claude Code ya no lo necesita para instalarse, **el sitio Next.js sí lo necesita** para compilar y correr.
1. Entra a https://nodejs.org y descarga la versión **LTS** (botón izquierdo).
2. Instálalo con "Siguiente, Siguiente, Finalizar" (deja todo por defecto).
3. Comprueba: abre **PowerShell** (botón Inicio → escribe "PowerShell" → Enter) y escribe:
   ```powershell
   node --version
   ```
   Debe responder algo como `v20.x`. Si responde, está bien.

### A2. Git (para subir el código a tu repo de GitHub)
1. Descarga de https://git-scm.com/download/win (empieza solo). Instala con opciones por defecto.
2. Comprueba en PowerShell:
   ```powershell
   git --version
   ```
   > Alternativa sin terminal: instala **GitHub Desktop** (https://desktop.github.com). Sirve para clonar y subir con clics.

### A3. Claude Code (el asistente que programa)
El método oficial en Windows ya **no usa Node ni WSL**. Es un instalador nativo.
1. Abre **Windows PowerShell** (la normal de 64 bits, no Git Bash ni CMD).
2. Pega y ejecuta:
   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```
   - Si te da un error de permisos de scripts, primero corre esto y vuelve a intentar:
     ```powershell
     Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
     ```
3. **Cierra y vuelve a abrir PowerShell** (para que tome el nuevo comando) y comprueba:
   ```powershell
   claude --version
   ```
4. La primera vez que lo uses te pedirá iniciar sesión con tu cuenta de Claude (se abre el navegador). Inicia sesión y listo.

---

## B. Traer tu repo a la PC

Necesitas tener la carpeta del repo (el de GitHub con la página de prueba) en tu computadora.

- **Si ya lo tienes clonado:** salta a la parte C.
- **Si no:** en GitHub, abre tu repo → botón verde **Code** → copia la URL `https://github.com/tu-usuario/tu-repo.git`. Luego en PowerShell:
  ```powershell
  cd "C:\Users\Victus\Documentos"      # o donde quieras guardarlo
  git clone https://github.com/tu-usuario/tu-repo.git
  cd tu-repo
  ```
  (Con GitHub Desktop: File → Clone repository → eliges el repo.)

A partir de aquí, **todo se hace dentro de la carpeta del repo.**

---

## C. Crear una rama de trabajo (para no romper la página de prueba)

Dentro de la carpeta del repo, en PowerShell:
```powershell
git checkout -b feat/web-suggestion
```
Esto crea una rama nueva. Construyes ahí; la página de prueba sigue intacta en `main` hasta que el sitio esté listo para reemplazarla.

---

## D. Meter los docs de research dentro del repo

Claude Code **solo puede leer lo que está dentro de la carpeta del repo.** Por eso copiamos el research ahí.

1. Dentro de la carpeta del repo, crea una carpeta llamada **`docs-fuente`**.
2. Copia ahí **todos** estos archivos de tu carpeta de research
   (`C:\Users\Victus\Claude\Projects\Keyword Research Suggestion`):
   los archivos `00` a `21` (.md) **+** `03_Keywords_Master_Suggestion.xlsx`.
3. Copia también `CLAUDE.md` pero a la **raíz** del repo (no dentro de `docs-fuente`). Claude Code lo lee solo y lo trata como las reglas del proyecto.
4. Abre ese `CLAUDE.md` con el Bloc de notas y cambia la frase *"estos archivos en esta carpeta"* por *"estos archivos en `docs-fuente/`"*.
5. Borra el archivo basura `~$03_Keywords_Master_Suggestion.xlsx` si lo copiaste.

> Hazlo con el Explorador de Windows (copiar/pegar normal). No necesitas terminal para esto.

---

## E. Abrir Claude Code en el repo

En PowerShell, asegúrate de estar dentro de la carpeta del repo (debe verse el nombre del repo en la ruta) y escribe:
```powershell
claude
```
Se abre una sesión interactiva: le escribes en lenguaje normal y él lee/edita archivos y corre comandos por ti, pidiéndote permiso.

---

## F. Primer mensaje a Claude Code (leer y confirmar, NO programar aún)

Pega esto tal cual:

```
Vas a construir el sitio web de Suggestion (suggestion.pe). NO inventes contenido:
todo el research, copy, estructura on-page, schema y plan ya están hechos y son la
única fuente de verdad, en la carpeta docs-fuente/. Las reglas resumidas están en
el CLAUDE.md de la raíz.

Antes de escribir una sola línea de código:
1. Lee CLAUDE.md y estos docs de docs-fuente/: 16 (brief de build), 17 (diseño),
   18 (índice ruta→contenido), 01, 02, 04, 06, 12.
2. Resúmeme en 10 líneas: stack, estructura de carpetas, enfoque data-driven y el
   roadmap de build en orden.
3. Mira qué hay hoy en el repo (incluida la página de prueba) y dime cómo integrar
   el nuevo sitio sin romper nada en la rama feat/web-suggestion.

NO ejecutes create-next-app todavía. Primero confírmame que entendiste el plan.
```

Cuando te devuelva el resumen y veas que entendió bien, recién avanzas.

---

## G. Construir por bloques (un mensaje por bloque)

Sigue el orden del doc 16. Los prompts exactos de cada bloque están en **`docs-fuente/20_Kickoff_Claude_Code.md`**, sección "Paso 2". El orden es:

1. Setup + layout global (Header/Footer/JSON-LD + tokens de diseño)
2. Componentes base
3. **Home** (revísala tú antes de seguir — define el estilo de todo)
4. Servicios (16+5) data-driven
5. Sectores (5 + hub)
6. Categorías + pilar + raíz (Nosotros/Casos/Contacto)
7. Blog (pilar + categorías + 24 MDX)
8. SEO técnico (sitemap, robots, JSON-LD, canonicals)
9. QA (Lighthouse ≥90, Rich Results, responsive, enlazado, 404)
10. Deploy

**Después de cada bloque**, pídele: *"corre `npm run build` y muéstrame que compila sin errores antes de seguir"*.

Para ver el sitio mientras trabajas, pídele: *"levanta el servidor de desarrollo"* (corre `npm run dev`) y abre en tu navegador **http://localhost:3000**.

---

## H. Guardar y subir a GitHub

Claude Code puede hacer los `commit` y `push` por ti — solo díselo: *"haz commit de este bloque con un mensaje descriptivo y súbelo a la rama"*. Si prefieres manual, en PowerShell:
```powershell
git add .
git commit -m "Bloque 3: Home"
git push -u origin feat/web-suggestion
```

---

## I. Publicar en Vercel (cuando el sitio esté listo)

1. Entra a https://vercel.com con tu cuenta de GitHub.
2. **Add New → Project** → elige tu repo.
3. Vercel detecta Next.js solo; dale **Deploy**. Te da una URL de prueba (`...vercel.app`).
4. Para usar **suggestion.pe**: en el proyecto de Vercel → **Settings → Domains** → agrega `suggestion.pe` y sigue las instrucciones de DNS (apuntar el dominio a Vercel desde donde lo compraste).
5. Cuando todo se vea bien, fusiona la rama a `main` (PR en GitHub o *"haz merge de feat/web-suggestion a main"* en Claude Code). Vercel redepliega solo en cada push a `main`.
6. Por último: verifica el dominio en **Google Search Console** y sube el sitemap (`suggestion.pe/sitemap.xml`).

---

## Resumen de bolsillo
Instalar (1 vez): **Node.js + Git + Claude Code**. → `git checkout -b feat/web-suggestion` → copiar docs a `docs-fuente/` + `CLAUDE.md` a la raíz → `claude` dentro del repo → primer mensaje "lee y confirma" → construir bloque por bloque revisando la Home → commit/push → Vercel → dominio → Search Console.
```
