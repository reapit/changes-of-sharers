import { css } from '@linaria/core'
import { MEDIA_QUERY } from '../../../../constants/style'

export const actionButton = css`
  width: 35rem;
  padding: 2px;
`

export const formLayoutModal = css`
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 1rem;
`

export const modalApplicant = css`
  top: 50%;
  width: 30rem;
`

export const checkboxStyle = css`
  .el-input[type='checkbox'] {
    border: 1px solid var(--color-grey-dark);
  }

  ${MEDIA_QUERY.TABLET} {
    .el-label {
      font-size: 0.5rem;
    }
  }
`

export const tableStyle = css`
  .el-table-cell-content {
    max-height: calc(100px - 0.75rem);
  }
`
