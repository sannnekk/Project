import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardsStore = defineStore('cards', function () {
    let cards = ref([
        {
          id: 1,
          name: 'Card 1',
          description: 'This is card 1',
          level: 'A1'
        },
        {
          id: 2,
          name: 'Card 2',
          description: 'This is card 2',
          level: 'A2'
        },
        {
          id: 3,
          name: 'Card 3',
          description: 'This is card 3',
          level: 'B1'
        }
    ])

    function getCard(id)
    {
        let card = ref(null)

        for (let i = 0; i < cards.value.length; i++) {
            if (id == cards.value[i].id) {
                card.value = cards.value[i]
                break
            }
        }
        
        return card
    }

    return {
        cards,
        getCard
    }
})