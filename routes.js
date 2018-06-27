import VueRouter from 'vue-router';

import home from './src/components/home.vue';
import matches from './src/components/matches.vue';
import groups from './src/components/groups.vue';
import singleGroup from './src/components/singleGroup.vue';
import teams from './src/components/teams.vue';
import singleTeam from './src/components/singleTeam.vue';

export default new VueRouter({
    routes: [
      { path: '/', component: home,props: true },
      { path: '/matches', component: matches,props: true },
      { path: '/groups', component: groups, props: true },
      { path: '/singleGroup/:group', component: singleGroup,props: true },
      { path: '/teams', component: teams,props: true},
      { path: '/singleTeam/:id', component: singleTeam,props: true}
    ]
});