export default {
    template: `
                <button :class = "{
                    'relative rounded disabled:cursor-not-allowed text-white px-6 py-2' : true,
                    'bg-blue-600 hover:bg-blue-800' : type === 'primary',
                    'bg-maroon-600 hover:bg-maroon-800' : type === 'secondary',
                    'bg-gray-600 hover:bg-gray-800' : type === 'muted',
                    'text-transparent' : processing
                 }"
                 :disabled="processing" @click="buttonClick">
                    <div :class = "{'loader' : processing}"></div>
                    <slot />
                </button>
            `,
    props: {
        type: {
            type: String,
            default: "primary",
        },
        processing: {
            type: Boolean,
            default: false,
        },
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
