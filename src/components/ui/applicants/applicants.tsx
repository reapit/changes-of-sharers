import React, { FC } from 'react'

import { FlexContainer, Title, Table, elWFull, Button, Icon, elMt7, ButtonGroup, useModal } from '@reapit/elements'
import { actionButton, tableStyle } from './__style__/style'
import { CheckKeyModal } from '../applicant-modal/check-key-modal'
import { APPLICANTS_DATA } from '../../../constants/applicant-data'
import { AddApplicantModal } from '../applicant-modal/add-applicant-modal'
import { cx } from '@linaria/core'

export const ApplicantPage: FC = () => {
  const [indexExpandedRow, setIndexExpandedRow] = React.useState<number | null>(null)

  const {
    Modal: CheckKeyModalView,
    modalIsOpen: checkKeyModalIsOpen,
    openModal: openCheckKeyModal,
    closeModal: closeCheckKeyModal,
  } = useModal('root')

  const {
    Modal: AddApplicantModalView,
    modalIsOpen: addApplicantModalIsOpen,
    openModal: openAddApplicantModal,
    closeModal: closeAddApplicantModal,
  } = useModal('root')

  function doOpenCheckKeyModal() {
    openCheckKeyModal()
  }

  function doOpenAddApplicantModal() {
    openAddApplicantModal()
  }

  return (
    <>
      <FlexContainer isFlexAuto isFlexColumn>
        <FlexContainer isFlexJustifyBetween>
          <Title>Manage Applicants</Title>
        </FlexContainer>
        <FlexContainer isFlexWrap>
          <Table
            className={cx(elWFull, tableStyle)}
            numberColumns={2}
            indexExpandedRow={indexExpandedRow}
            setIndexExpandedRow={setIndexExpandedRow}
            data-testid={'test.table.tenancyCheckSetupTable'}
            rows={APPLICANTS_DATA.applicants.map((item) => {
              return {
                cells: [
                  {
                    label: 'Name',
                    value: item.name,
                    narrowTable: {
                      showLabel: true,
                    },
                    cellHasDarkText: true,
                  },
                  {
                    label: 'Action',
                    value: (
                      <Button intent="neutral" className={actionButton}>
                        <Icon icon="cancelSolidSystem" intent="primary" />
                      </Button>
                    ),
                    narrowTable: {
                      showLabel: true,
                      order: 1,
                    },
                  },
                ],
              }
            })}
          />
        </FlexContainer>
        <FlexContainer className={elMt7}>
          <Button type="submit" intent="primary" onClick={doOpenAddApplicantModal}>
            Add Applicant
          </Button>
        </FlexContainer>
        <ButtonGroup alignment="right">
          <Button chevronRight intent="primary" onClick={doOpenCheckKeyModal}>
            Next
          </Button>
        </ButtonGroup>
      </FlexContainer>

      {checkKeyModalIsOpen && <CheckKeyModal Modal={CheckKeyModalView} onModalClose={closeCheckKeyModal} />}

      {addApplicantModalIsOpen && (
        <AddApplicantModal Modal={AddApplicantModalView} onModalClose={closeAddApplicantModal} />
      )}
    </>
  )
}
