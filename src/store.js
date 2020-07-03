import { writable } from "svelte/store"
import Papa from "papaparse"

const storedState = localStorage.getItem("dashboard:state")
const store = writable(storedState ? JSON.parse(localStorage.getItem("dashboard:state")) : {
  data: null,
  charts: []
})

store.subscribe(state => {
  localStorage.setItem("dashboard:state", JSON.stringify(state))
})

store.setDataFile = file => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    store.update(state => {
      state.data = Papa.parse(reader.result, { header: true }).data
      state.fields = []
      for (let item of state.data) {
        for (let key of Object.keys(item)) {
          if (!state.fields.includes(key)) {
            state.fields.push(key)
          }
        }
      }
      state.fields.sort()
      return state
    })
  };
}

store.addChart = chart => {
  store.update(store => {
    store.charts.push(chart)
    return store
  })
}

store.chartChanged = chart => {
  store.update(state => {
    state.charts.splice(chart.id, 1, chart)
    return state
  })
}

export default store