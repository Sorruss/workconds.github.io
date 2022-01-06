import router from '@/router'

export const employeeModule = {
  namespaced: true,
  state: {
    employees: [
      {id: 1, position: 'Программист', 
        state: {hp: 100, vision: 100, hearing: 100}, 
        settings: {},
        optionalSettings: {},
        history: []
      },
      {id: 2, position: 'Водитель', 
        state: {hp: 100, vision: 100, hearing: 100}, 
        settings: {},
        optionalSettings: {},
        history: []
      },
      {id: 3, position: 'Механик', 
        state: {hp: 100, vision: 100, hearing: 100}, 
        settings: {},
        optionalSettings: {},
        history: []
      },
      {id: 4, position: 'Токарь', 
        state: {hp: 100, vision: 100, hearing: 100}, 
        settings: {},
        optionalSettings: {},
        history: []
      }
    ],
    settings: [
      {
        id: 1,
        title: 'Питание',
        translation: 'nutrition',
        variants: ['на молоке', 'диета', 'мясо', 'голуби']
      },
      {
        id: 2,
        title: 'Отдых',
        translation: 'relaxation',
        variants: ['геншин', 'танки', 'ютуб', 'голуби']
      },
      {
        id: 3,
        title: 'Лечение',
        translation: 'treatment',
        variants: ['наркоз', 'сон', 'мясо', 'голуби']
      }
    ],
    yearCounter: 0
  },
  getters: {},
  mutations: {
    setSetting(state: any, setting: any) {
      Object.assign(state.employees[setting[0] - 1].settings, setting[1])
    },
    setYearCounter(state: any, newVal: number) {
      state.yearCounter = newVal
    }
  },
  actions: {
    nextYear({ state, commit } : {state: any, commit: any}) {
      for (let employee of state.employees) {
        state.employees[employee.id - 1].history.push(employee.settings)
      }

      if (state.yearCounter >= 14) {
        commit('setYearCounter', 0)
        router.push('/') // тут должен был переход на экран результатов и добавить условие чтобы все были живы и тд
        return
      }
      commit('setYearCounter', state.yearCounter + 1)
    }
  }
}