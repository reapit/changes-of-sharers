import React, { FC } from 'react'
import {
  Title,
  Button,
  ModalProps,
  FlexContainer,
  FormLayout,
  Input,
  Table,
  elMt6,
  elMb6,
  elWFull,
  InputWrap,
  InputGroup,
  ButtonGroup,
} from '@reapit/elements'
import { APPLICANTS_DATA } from '../../../constants/applicant-data'
import { formLayoutModal, modalApplicant, checkboxStyle, tableStyle } from '../applicants/__style__/style'
import { cx } from '@linaria/core'

export type AddApplicantModalProps = {
  Modal: React.FC<Partial<ModalProps>>
  onModalClose: () => void
}

export const AddApplicantModal: FC<AddApplicantModalProps> = ({ Modal, onModalClose }) => {
  const [indexExpandedRow, setIndexExpandedRow] = React.useState<number | null>(null)
  return (
    <Modal className={modalApplicant}>
      <FlexContainer>
        <Title>Add Applicant</Title>
      </FlexContainer>
      <FlexContainer isFlexColumn>
        <FormLayout className={formLayoutModal}>
          <InputWrap>
            <InputGroup
              label="Search by Name"
              type="text"
              id="name"
              placeholder="Search by Name"
              data-testid={'input.searchName'}
            />
          </InputWrap>
          <InputWrap>
            <InputGroup
              label="Search by Address"
              type="text"
              id="address"
              placeholder="Search by Address"
              data-testid={'input.searchAddress'}
            />
          </InputWrap>
          <InputWrap>
            <InputGroup
              label="Search by Code"
              type="text"
              id="code"
              placeholder="Search by Code"
              data-testid={'input.searchCode'}
            />
          </InputWrap>
          <InputWrap>
            <InputGroup
              label="Search by Telephone"
              type="number"
              id="telephone"
              placeholder="Search by Telephone"
              data-testid={'input.searchTelephone'}
            />
          </InputWrap>
          <InputWrap>
            <InputGroup
              label="Search by Email"
              type="number"
              id="email"
              placeholder="Search by Email"
              data-testid={'input.searchEmail'}
            />
          </InputWrap>
        </FormLayout>
      </FlexContainer>
      <FlexContainer className={cx(elMt6, elMb6)}>
        <Button type="submit" intent="primary">
          Search
        </Button>
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
                    <Button intent="neutral">
                      <Input type="checkbox" className={checkboxStyle} />
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

      <ButtonGroup alignment="right" className={cx(elMt6, elMb6)}>
        <Button type="submit" intent="primary" onClick={onModalClose}>
          Close
        </Button>
        <Button chevronRight type="submit" intent="primary">
          Add Applicant
        </Button>
      </ButtonGroup>
    </Modal>
  )
}
