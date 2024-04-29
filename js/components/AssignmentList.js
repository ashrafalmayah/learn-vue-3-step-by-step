import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment,
    },
    template: /* html */ `
<section v-show="filteredAssignments.length">
    <h2 class="font-bold text-xl mb-2 flex justify-between pr-1">
        {{ title }}
        <span>{{ filteredAssignments.length }}</span>
    </h2>
    <div class="space-x-2 max-w-72 flex overflow-x-auto pb-1">
        <button 
            v-for="tag in tags" 
            @click="currentTag = tag;" 
            class="bg-gray-900 rounded-lg px-2 py-1" 
            :class="{'!bg-blue-500' : currentTag === tag}"
        >{{ tag }}</button>
    </div>
    <ul class="space-y-2 max-w-72 mt-4">
        <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
    </ul>
</section>`,
    data() {
        return {
            currentTag: "all",
        };
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === "all") {
                return this.assignments;
            }

            return this.assignments.filter((a) => a.tag === this.currentTag);
        },
        tags() {
            return ["all", ...new Set(this.assignments.map((a) => a.tag))];
        },
    },
    props: {
        assignments: Array,
        title: String,
    },
};
