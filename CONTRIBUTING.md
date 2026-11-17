# Cómo contribuir

## Ramas (Git Flow)
- Nunca se trabaja en `main` ni en `develop` (están protegidas).
- Cada cambio en una rama `feature/nombre` que sale de `develop`.
- Arreglos urgentes en `hotfix/x.y.z` desde `main`.

## Commits (Conventional Commits)
`feat:`, `fix:`, `docs:`, `ci:`, `chore:` + descripción corta.

## Pull requests
1. Push de tu rama y PR hacia `develop`.
2. Explicar qué cambia y enlazar el issue (`Closes #1`).
3. El CI tiene que salir en verde antes del merge.

## Código
- Cada función documentada con JSDoc (`@param`, `@returns`).
- Pasar `npm test` antes de subir.