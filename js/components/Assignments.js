import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: /* html */ `
<section class="space-y-4">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <assignment-create @add="add"></assignment-create>
</section>`,

    data() {
        return {
            assignments: [],
            newAssignment: "",
        };
    },
    created() {
        fetch("http://localhost:3001/assignments")
            .then((response) => response.json())
            .then((assignments) => {
                this.assignments = assignments;
            });
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter((a) => !a.completed),
                completed: this.assignments.filter((a) => a.completed),
            };
        },
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.reduce(
                    (a, b) => Math.max(a, b.id) + 1,
                    -Infinity
                ),
            });
        },
    },
};
