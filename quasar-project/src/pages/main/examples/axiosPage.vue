<script setup>
// imports
import {onMounted, ref} from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
// variables
const $q = useQuasar()
const data = ref(null)
const alerts = [
  { color: 'negative', message: 'Woah! Danger! You are getting good at this!', icon: 'bi-bug-fill' },
  { message: 'You need to know about this!', icon: 'bi-exclamation-diamond-fill' },
  { message: 'Wow! Nice job!', icon: 'bi-hand-thumbs-up' },
  { color: 'teal', message: 'Quasar is cool! Right?', icon: 'bi-messenger' },
  { color: 'purple', message: 'Jim just pinged you', avatar: 'https://cdn.quasar.dev/img/boy-avatar.png' },
  { multiLine: true, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.' }
]

function loadData() {
  api.get('/api/backend')
    .then((response) => {
      data.value = response.data
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'bi-bug-fill'
      })
    })
}

// functions
onMounted(() => {
   loadData ()
})
function showNotif (position)
{
  const {color, textColor, multiLine, icon, message, avatar} = alerts[
  Math.floor(Math.random() * 10) % alerts.length
    ]
  const random = Math.random() * 100

  const twoActions = random > 70
  const buttonColor = color ? 'white' : void 0

  $q.notify({
    color,
    textColor,
    icon: random > 30 ? icon : null,
    message,
    position,
    avatar,
    multiLine,
    actions: twoActions
      ? [
        {
          label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */
          }
        },
        {
          label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */
          }
        }
      ]
      : (random > 40
          ? [{
            label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */
            }
          }]
          : null
      ),
    timeout: Math.random() * 5000 + 3000
  })
}
//
function showNotifyBtn () {
  $q.notify({
    message: 'Jim pinged you.',
    caption: '5 minutes ago',
    color: 'secondary'
  })
}
</script>

<template>
AXIOS
  <div class="q-pa-md q-gutter-y-sm column items-center">
    <div>
      <div class="row q-gutter-sm">
        <q-btn round size="sm" color="secondary" @click="showNotif('top-left')">
          <q-icon name="bi-arrow-bar-left" class="rotate-45" />
        </q-btn>
        <q-btn round size="sm" color="accent" @click="showNotif('top')">
          <q-icon name="bi-arrow-bar-up" />
        </q-btn>
        <q-btn round size="sm" color="secondary" @click="showNotif('top-right')">
          <q-icon name="bi-arrow-bar-up" class="rotate-45" />
        </q-btn>
      </div>
    </div>

    <div>
      <div class="row q-gutter-sm">
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif('left')">
            <q-icon name="bi-arrow-bar-left" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif('center')">
            <q-icon name="bi-arrow-repeat" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif('right')">
            <q-icon name="bi-arrow-bar-right" />
          </q-btn>
        </div>
      </div>
    </div>

    <div>
      <div class="row q-gutter-sm">
        <div>
          <q-btn round size="sm" color="secondary" @click="showNotif('bottom-left')">
            <q-icon name="bi-arrow-bar-right" class="rotate-135" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif('bottom')">
            <q-icon name="bi-arrow-bar-down" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="secondary" @click="showNotif('bottom-right')">
            <q-icon name="bi-arrow-bar-right" class="rotate-45" />
          </q-btn>
        </div>
      </div>
    </div>
  </div>
  <div class="q-pa-md q-gutter-y-sm column items-center">
    <q-btn color="purple" @click="showNotifyBtn" label="Show with caption" />
  </div>
</template>

<style scoped>

</style>
