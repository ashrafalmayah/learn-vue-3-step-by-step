import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags,
    },
    template: /* html */ `
<section v-show="filteredAssignments.length">
    <h2 class="font-bold text-xl mb-2 flex justify-between pr-1">
        {{ title }}
        <span>{{ filteredAssignments.length }}</span>
    </h2>

    <assignment-tags v-model:currentTag="currentTag" :initial-tags="assignments.map((a) => a.tag)" />

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
    },
    props: {
        assignments: Array,
        title: String,
    },
};
