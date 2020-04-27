<template>
  <div class="container">
    <h3 class="title">Etiquetas</h3>
    <div class="group">
      <input class="add-tag-input" type="text" placeholder="Añadir Etiqueta" @keyup.enter="createTag($event)"/>
    </div>

    <table class="tags-table">
      <tr v-for="tag in tags" :key="tag.id" :id="tag.id" :tag="tag">
        <td>
          <span class="dot" :style="{backgroundColor: tag.color}"></span>
        </td>
        <td>{{ tag.name }}</td>
        <td>
          <button>Editar</button>
        </td>
        <td>
          <button>Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import mapMutations from 'vuex';

export default {
  name: "TagsTable",
  data() {
    return {
      title: "Etiquetas",
      tags: [
        {
          id: 0,
          name: "Balance",
          color: "blue"
        },
        {
          id: 1,
          name: "Completada",
          color: "green"
        },
        {
          id: 2,
          name: "Cancelada",
          color: "red"
        }
      ]
    };
  },
  methods: {
    createTag($event) {
      this.$socket.emit('createTag', $event.target.value, (response) => {
        console.log(response);
      });
    }
  }
};
</script>

<style>
.tags-table {
  margin-top: 15px;
  border-collapse: collapse;
  width: 100%;
}

.tags-table td {
  padding: 12px 10px 12px 0;
}

.tags-table td:nth-child(1) {
  width: 2%;
}

.tags-table td:nth-child(2) {
  width: 78%;
}

.tags-table td:nth-child(3),
.tags-table td:nth-child(4) {
  width: 10%;
  text-align: center;
}

.tags-table tr:hover {
  background-color: #ddd;
}

.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: block;
}

.title {
  width: 100%;
  color: gray;
  border-bottom: 2px solid #ddd;
  margin-bottom: 2rem;
  font-size: 24px;
  padding: 1rem 0;
}

button {
  background: none;
  border: none;
  color: grey;
  cursor: pointer;
}

.add-tag-input {
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  opacity: 0.73;
  padding: 10px 20px 10px 0;
  outline: none;
  border: none;
  font: normal 24px / normal Arial, Helvetica, sans-serif;
  color: rgba(0, 142, 198, 1);
}
</style>