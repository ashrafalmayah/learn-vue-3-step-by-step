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
            assignments: [
                {
                    name: "Read chapter 4",
                    completed: false,
                    id: 1,
                    tag: "math",
                },
                {
                    name: "Turn in homework",
                    completed: false,
                    id: 2,
                    tag: "math",
                },
                {
                    name: "Finish project",
                    completed: false,
                    id: 3,
                    tag: "science",
                },
                {
                    name: "Fix the query",
                    completed: false,
                    id: 4,
                    tag: "programming",
                },
                {
                    name: "Memorize the laws",
                    completed: false,
                    id: 5,
                    tag: "physics",
                },
            ],
            newAssignment: "",
        };
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
