# ReeyAI Demo Sitesi

ReeyAI şablonuyla kurulmuş örnek site. İçerik bu repoda yaşar; ReeyAI CMS'te
yapılan her kayıt gerçek bir commit'tir, build GitHub Actions'ta koşar.

## Yapı

| Yol | Ne var? |
| --- | --- |
| `src/content/blog/*.mdx` | Blog yazıları (frontmatter + MDX gövde) |
| `src/content/authors/*.md` | Yazarlar |
| `src/content.config.ts` | Zod şemaları — koleksiyonların gerçek kaynağı |
| `.reeyai/sites.jsonc` | Site tanımları (CMS buradan okur) |
| `.github/workflows/build.yml` | CI: her push'ta `pnpm build` |

## Geliştirme

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build
```
