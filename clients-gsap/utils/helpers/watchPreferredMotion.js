

export const watchPreferredMotion = (callback = () => {}) => {
	const mm = gsap.matchMedia();

	mm.add("(prefers-reduced-motion: no-preference)", callback);
};