import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList,
    },
    template: `
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                {
                    name: "Read chapter 4",
                    completed: false,
                    id: 1,
                },
                {
                    name: "Turn in homework",
                    completed: false,
                    id: 2,
                },
                {
                    name: "Finish project",
                    completed: false,
                    id: 3,
                },
            ],
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
};
