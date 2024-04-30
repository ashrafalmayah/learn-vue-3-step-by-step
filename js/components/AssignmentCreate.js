export default {
    template: /*html*/ `
<form @submit.prevent="add" class="text-black flex space-x-1 mt-2 rounded-lg overflow-clip">
    <input v-model="newAssignment" class="p-2 flex-1" placeholder="New assignment..." type="text"></input>
    <button class="py-2 px-4 bg-blue-500 text-white font-semibold uppercase">Add</button>
 </form>`,
    data() {
        return {
            newAssignment: "",
        };
    },
    methods: {
        add() {
            this.$emit("add", this.newAssignment);

            this.newAssignment = "";
        },
    },
};
