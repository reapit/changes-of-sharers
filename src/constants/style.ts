import {
  DESKTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  SUPER_WIDESCREEN_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from '@reapit/elements'

export const MEDIA_QUERY = {
  MOBILE: `@media screen and (max-width: ${MOBILE_BREAKPOINT - 0.1}px)`,
  MOBILE_LANDSCAPE: `@media only screen and (max-height: ${MOBILE_BREAKPOINT - 0.1}px) and (orientation: landscape)`,
  TABLET: `@media screen and (min-width: ${MOBILE_BREAKPOINT}px) 
             and (max-width: ${TABLET_BREAKPOINT - 0.1}px)`,
  DESKTOP: `@media screen and (min-width: ${TABLET_BREAKPOINT}px) 
              and (max-width: ${DESKTOP_BREAKPOINT - 0.1}px)`,
  WIDE_SCREEN: `@media screen and (min-width: ${DESKTOP_BREAKPOINT}px) 
                  and (max-width: ${WIDESCREEN_BREAKPOINT - 0.1}px)`,
  SUPER_WIDE_SCREEN: `@media screen and (min-width: ${WIDESCREEN_BREAKPOINT}px) 
                        and (max-width: ${SUPER_WIDESCREEN_BREAKPOINT - 0.1}px)`,
  A_4K_SCREEN: `@media screen and (min-width: ${SUPER_WIDESCREEN_BREAKPOINT}px)`,
} as const
