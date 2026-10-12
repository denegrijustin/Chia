# Portrait asset generation

Generated with the built-in image generation tool from user-provided reference photos. Genuine transparent-background PNGs; no original photos are bundled in the app.

Shared specification: realistic unglazed orange-red terracotta portrait Chia Pet bust, porous fired-clay craftsmanship, entire head/neck/shoulders on simple oval pedestal, matching soft studio lighting, subject likeness preserved, bare grooved scalp planting area, no greenery, no painted skin or eyes, no background, logos, text or watermark.

1. Courtney: woman on the left in the couple reference; preserve rectangular glasses, joyful tooth-showing smile, cheeks and short side-parted hair silhouette. All glasses, teeth and hair sculpted from the same terracotta. Front-facing.
2. Justin: man on the right in the couple reference; preserve swept-back short hair, broad cheeks, strong eyebrows, closed-lip smile, mustache and goatee/stubble contours. Match Courtney's material, composition and pedestal. Front-facing.
3. Sunglasses: only the man closest to the camera on the far left of the stadium reference; preserve broad rectangular sunglasses, trimmed beard, slightly receding short hair, nose and lips. Plain polo collar carved in terracotta; lenses are also unpainted clay. Front-facing.
4. Hockey Fan: man in hockey jersey reference; preserve broad rounded face, short hair, stocky neck, cheeks and expressive slightly open mouth with upward gaze. Bust only, no raised hands. Plain carved jersey neckline without team graphics. Match the other terracotta sculptures.

App overlays animate virtual sprouts over each sculpture's scalp. The underlying generated portraits remain unchanged.

## Realistic growth assets
Built-in image generation, transparent PNG overlays; the app preserves the original pixels and blends stages in SVG.

- Seedling: early Salvia hispanica crown, tiny paired cotyledons, slender pale green stems, a few seed husks, low wide curved planting footprint, realistic botanical macro photography, no pot or soil.
- Young: taller chia stems and denser paired cotyledons/first true leaves, outward curving perimeter stems, soft rounded growing hair crown, realistic photographic texture, transparent background.
- Mature: dense rounded afro-like chia canopy, tiny oval leaves and natural varied stem angles, longer perimeter stems bend and droop downward, open lower center to preserve the face, genuine transparent background. A background-only edit removed empty-region glow while retaining foliage.

Ten stages change germination, density, stem height, crown width and the mature canopy over time. Virtual seed colors apply a subtle display-only color filter.

## Integrated photographic growth replacement

Built-in image generation, identity-preserving edits of the four portrait busts. The app now uses complete photographic plant-and-clay composites instead of drawn stems or canopy overlays.

Final files: `growth-courtney.png`, `growth-justin.png`, `growth-sunglasses.png`, `growth-hockey.png` (three photographic phases each), and corresponding `overgrown-*.png` files (untamed mature growth). All reside alongside this document in `public/`.

Atlas prompt: preserve portrait likeness, clay, camera and lighting in three equal columns: sparse cotyledons, dense short coat, tall mature chia with natural veined leaves and curved stems. Keep the face and eyes unobstructed. Roots and shadows integrate with the curved upper scalp and front planting surface. Transparent background.

Overgrown prompt: preserve the terracotta portrait and add tall branching Salvia hispanica, a dense irregular canopy, flower spikes and gravity-curved outer stems cascading from roots above. Keep forehead, eyes and glasses unobstructed. Macro studio product photography; no drawn or repeated rigid stems. Transparent background.

Final gravity correction prompt: preserve exact canvas/layout/likeness, correct root placement only. Seeds and roots exist only on upper and upper forward-facing planting surfaces. Remove them from undersides, lower side hair, ears, face, neck, shoulders and pedestal. Long stems hang from upper roots. Cover front upper hair while keeping forehead and eyes clear. Preserve photographic texture, contact shadows and alpha.

## Justin canopy framing correction

`mature-justin.png` is a standalone transparent mature portrait made with built-in image generation. Prompt: extract only the mature rightmost Justin sculpture, preserve likeness/clay/lighting/leaf texture, reconstruct clipped leaves on both sides, include the complete canopy and pedestal with transparent margins, keep roots on upper planting surfaces and eyes clear. This replaces the tight atlas crop for stages 9–14.
