import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: {
        Assignment,
        AssignmentTags,
        Panel,
    },
    template: /* html */ `
<panel v-show="filteredAssignments.length">
    <div class="flex justify-between items-start">
        <h2 class="font-bold text-xl mb-2 flex pr-1">
            {{ title }}
            <span class="ml-2">{{ filteredAssignments.length }}</span>
        </h2>

        <button title="close" v-show="canToggle" @click="$emit('toggle')">&times;</button>
    </div>

    <assignment-tags v-model:currentTag="currentTag" :initial-tags="assignments.map((a) => a.tag)" />

    <ul class="space-y-2 w-72 mt-4">
        <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
    </ul>

    <slot></slot>
</panel>`,
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
        canToggle: { type: Boolean, default: false },
    },
};
