# Theme Customization

For customizing the theme, please navigate to the app.css file, which defines all preset colors and variables provided by Web Base. You can modify these colors to suit your desired aesthetic.

## Theme Creation

Alternatively, you can utilize the online theme generator provided by Shadcn Svelte. By visiting https://shadcn-svelte.com/themes, you can define your desired theme and generate a corresponding CSS file. This tool offers a convenient and efficient way to create a custom theme without having to manually write CSS code.

## Theme Extension

If you require further customization, you can extend the existing variables by adding your own specific variables to the app.css file. This will allow you to tailor the theme to your precise needs.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 240 10% 3.9%;
		--card: 0 0% 100%;
		--card-foreground: 240 10% 3.9%;
		--popover: 0 0% 100%;
		--popover-foreground: 240 10% 3.9%;
		--primary: 240 5.9% 10%;
		--primary-foreground: 0 0% 98%;
		--secondary: 240 4.8% 95.9%;
		--secondary-foreground: 240 5.9% 10%;
		--muted: 240 4.8% 95.9%;
		--muted-foreground: 240 3.8% 46.1%;
		--accent: 240 4.8% 95.9%;
		--accent-foreground: 240 5.9% 10%;
		--destructive: 0 72.22% 50.59%;
		--destructive-foreground: 0 0% 98%;
		--border: 240 5.9% 90%;
                ....
```

:::note
When adding new colored variables, please ensure that you update the definitions for these variables in the _definitions.json_ file. This step is necessary for Tailwind to recognize and utilize the new variables.
:::
