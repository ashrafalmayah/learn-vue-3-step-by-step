export default {
    template: /*html*/ `
<form @submit.prevent="add" class="text-black flex bg-white rounded-lg overflow-clip divide-x-4 divide-gray-800">
    <input v-model="newAssignment" class="p-2 flex-1" placeholder="New assignment..." type="text"></input>
    <button class="py-2 px-4">Add</button>
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
