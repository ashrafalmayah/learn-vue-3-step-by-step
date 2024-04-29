import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList,
    },

    template: /* html */ `
<section class="space-y-4">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <form @submit.prevent="add" class="text-black bg-white rounded-lg overflow-clip divide-x-4 divide-gray-800">
        <input v-model="newAssignment" class="p-2" placeholder="New assignment..." type="text"></input>
        <button class="p-2">Add</button>
    </form>
    </sect
ion>
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
            newAssignment: '',
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
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.reduce(
                    (a, b) => Math.max(a, b.id) + 1,
                    -Infinity
                ),
            });

            this.newAssignment = "";
        },
    },
};
