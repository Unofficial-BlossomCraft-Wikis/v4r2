import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_qvJxq8Tn.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_H7v7Ft_U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Infinite Magenta Concrete",
  "images": {
    "color": "MUfCHtba5zu7EsOBufUXfBVD5mju0pe2iyr4F19s3bIxqLTS",
    "item": "MUfCHtba5zu7uZCruj9zB31IA7RCkpPrf54is9jTwHgE8ZtQ"
  },
  "type": "magic/infinite",
  "crate": "concrete",
  "unmodifiable": true,
  "winChance": 6
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/bcitems/ConcreteCrate/InfiniteMagentaConcrete.mdx";
const file = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/bcitems/ConcreteCrate/InfiniteMagentaConcrete.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/altie/Documents/BCUW/bcuw-v4-r2/src/content/bcitems/ConcreteCrate/InfiniteMagentaConcrete.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };