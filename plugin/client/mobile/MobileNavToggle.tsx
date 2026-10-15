import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { IconFolderOpenOutline16, IconPanelLeftOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { NS } from './locales.ts'

/** Full props for the session-header directory toggle. */
export interface MobileNavToggleProps extends PropsRuntime<'conversation.session.header.actions'>, PropsLocale<typeof NS> {
  /** Bound ctx.layout.toggleSidebar(). */
  toggleSidebar: () => void
}

/**
 * Mobile-only icon buttons next to the session title:
 * - toggle: opens the directory drawer on narrow screens.
 * - files: toggles the dsh-web-ui explorer sheet directly — one tap opens,
 *   a second tap closes it, no drawer round-trip. (The drawer footer keeps
 *   a Files entry for the hero/blank phases where this header does not
 *   exist.)
 * Hidden entirely on wide screens (CSS media query).
 */
export function MobileNavToggle({ toggleSidebar, t }: MobileNavToggleProps) {
  const toggleExplorer = (): void => {
    const frame = document.querySelector('[data-mobile-nav="frame"]')
    if (frame === null) return
    if (frame.hasAttribute('data-aionui-explorer-open')) {
      frame.removeAttribute('data-aionui-explorer-open')
    } else {
      frame.setAttribute('data-aionui-explorer-open', '')
    }
  }
  return (
    <>
      <button
        type="button"
        data-mobile-nav="toggle"
        aria-label={t('open')}
        title={t('open')}
        onClick={() => toggleSidebar()}
      >
        <IconPanelLeftOutline16 size={16} />
      </button>
      <button
        type="button"
        data-mobile-nav="files"
        aria-label={t('files')}
        title={t('files')}
        onClick={toggleExplorer}
      >
        <IconFolderOpenOutline16 size={16} />
      </button>
    </>
  )
}
