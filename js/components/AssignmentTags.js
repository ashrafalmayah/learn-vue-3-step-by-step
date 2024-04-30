export default {
    template: `
    <div class="space-x-2 max-w-72 flex overflow-x-auto pb-1">
        <button 
            v-for="tag in tags" 
            @click="$emit('update:currentTag', tag)"
            class="bg-gray-900 rounded-lg px-2 py-1" 
            :class="{'!bg-blue-500' : currentTag === tag}"
        >{{ tag }}</button>
    </div>`,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ["all", ...new Set(this.initialTags)];
        },
    },
};
