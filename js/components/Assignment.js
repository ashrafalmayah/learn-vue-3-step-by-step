export default {
    template: /* html */ `
<li>
    <label :class="{
                'bg-gray-900 hover:brightness-125 px-4 py-2 rounded-xl flex justify-between items-center space-x-8' : true,
                'line-through' : assignment.completed,
            }">
        <span>{{ assignment.name }}</span>

        <input type="checkbox" v-model="assignment.completed" />
    </label>
    <
/li>
    `,
    props: {
        assignment: Object,
    },
};
