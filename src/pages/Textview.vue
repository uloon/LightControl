<template>
  <div id="textview">
    <table>
      <thead>
        <tr>
          <th>教室</th>
          <th>开灯时间</th>
          <th>报警</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oneClassroom in lightData" :key="oneClassroom.classRoom">
          <td>{{ oneClassroom.roomNumber }}</td>
          <td>{{ oneClassroom.lightingTime }}小时</td>
          <td v-if="oneClassroom.lightingTime - 3 > 0">
            超过{{ oneClassroom.lightingTime - 3 }}小时未关灯<button
              @click="relieve(oneClassroom.roomNumber)"
            >
              解除警告
            </button>
          </td>
          <td v-else>无</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Textview",
  data() {
    return {
      lightData: [
        { roomNumber: "A1-101", lightingTime: 1 },
        { roomNumber: "A1-102", lightingTime: 2 },
        { roomNumber: "A1-103", lightingTime: 3 },
        { roomNumber: "A1-104", lightingTime: 4 },
        { roomNumber: "A1-105", lightingTime: 5 },
        { roomNumber: "A1-106", lightingTime: 6 },
        { roomNumber: "A1-107", lightingTime: 7 },
        { roomNumber: "A1-108", lightingTime: 8 },
        { roomNumber: "A1-108", lightingTime: 8 },
        { roomNumber: "A1-108", lightingTime: 8 },
        { roomNumber: "A1-108", lightingTime: 8 },
        { roomNumber: "A1-108", lightingTime: 8 },
      ],
    };
  },
  methods: {
    relieve(a) {
      confirm("确认解除" + a + "的警告吗");
    },
  },
};
</script>

<style>

#textview {
  width: 70%;
  margin: 0 auto;
}

table {
  padding: 10px;
  margin: 20px 0;
  border-collapse: collapse;
  width: 100%;
  height: 90%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

thead {
  background-color: rgb(143, 143, 143);
  text-align: center;
}

thead tr {
  padding-right: 17px;
  z-index: 2;
}

th {
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  padding: 0.7rem 0;
}

tbody {
  display: block;
  height: 100%;
  overflow-y: scroll;
}

tr {
  display: block;
  overflow: hidden;
}

tbody tr:nth-child(even) {
  background-color: #ddd;
}

th,
td {
  width: 33.33%;
  float: left;
  text-align: center;
}

td {
  height: 60px;
  line-height: 60px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
}

th:last-child,td:last-child {
  border-right: 0 none;
}

button {
  background: rgb(214, 98, 98);
  color: white;
  border: 0px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 1px #888888;
  cursor: pointer;
}
</style>