export default {
    template: /*html*/ `
        <div :class="{
            'border-2 p-4 rounded-xl' : true,
            'bg-white border-gray-300 text-black' : theme === 'light',
            'bg-black border-gray-900 text-white' : theme === 'dark',
            }">
            <h2 v-if="$slots.heading" class="font-bold text-xl mb-2">
                <slot name="heading" />
            </h2>

            <slot />
            
            <footer v-if="$slots.footer" class="border-t border-gray-900 mt-4 pt-4 text-sm">
                <slot name="footer" />
            </footer>
        </div>
    `,
    props: {
        theme: { type: String, default: "dark" },
    },
};
