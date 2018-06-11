import {playMode} from 'common/js/config'
import {loadSearch, loadPlay} from 'common/js/cache'
import {loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistroy: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
