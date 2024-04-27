export default {
    template: `
                <button class="bg-gray-600 hover:bg-gray-800 rounded disabled:cursor-not-allowed text-white px-6 py-2" :disabled="processing" @click="buttonClick">
                    <slot />
                </button>
            `,
    data() {
        return {
            processing: false,
        };
    },
    methods: {
        buttonClick() {
            this.processing = true;
            setTimeout(() => {
                this.processing = false;
            }, 3000);
        },
    },
};
