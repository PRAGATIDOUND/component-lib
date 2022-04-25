import project from '../assets/Projects.svg'
import profile from '../assets/Profile.svg'
import community from '../assets/Community.svg'
import estimates from '../assets/Estimates.svg'
import transaction from '../assets/Transactions.svg'

export const homebaseSideNavConfig: HomebaseSideNavConfig[] = [{
    src: project,
    text: 'Projects',
    route: '/account',
    match: 'account'
  },
  {
    src: community,
    text: 'Community',
    route: '/matchmaking',
    match: 'matchmaking'
  },
  {
    src: estimates,
    text: 'Estimates',
    route: '/estimate',
    match: 'estimate'
  },
  {
    src: profile,
    text: 'Profile',
    route: '/profile',
    match: 'profile'
  },
  {
    src: transaction,
    text: 'Transactions',
    route: '/payment',
    match: 'payment'
  }
]

export type HomebaseSideNavConfig = {
  src: string,
  text: string,
  route: string,
  match: string
}