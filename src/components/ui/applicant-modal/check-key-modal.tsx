import React, { FC } from 'react'
import {
  Button,
  ButtonGroup,
  ModalProps,
  FlexContainer,
  Title,
  FormLayout,
  Select,
  Label,
  Input,
  InputWrapFull,
} from '@reapit/elements'
import { formLayoutStyle } from '../check-keys/__style__/style'
import { modalApplicant } from '../applicants/__style__/style'
import { CHECK_KEY_TERM } from '../../../constants/applicant-data'

export type CheckKeyModalProps = {
  Modal: React.FC<Partial<ModalProps>>
  onModalClose: () => void
}

export const CheckKeyModal: FC<CheckKeyModalProps> = ({ Modal, onModalClose }) => {
  return (
    <Modal className={modalApplicant}>
      <FlexContainer isFlexAuto isFlexColumn>
        <FlexContainer>
          <Title>Check Keys</Title>
        </FlexContainer>
        <FormLayout hasMargin className={formLayoutStyle}>
          <InputWrapFull>
            <Label>Start Date</Label>
            <Input type="date" />
          </InputWrapFull>
          <InputWrapFull>
            <Label>Term</Label>
            <Select>
              <option key="select-term" value="">
                Select Term
              </option>
              {CHECK_KEY_TERM.map((term) => {
                return (
                  <option key={term.value} value={term.id} data-testid={'test.option.term'}>
                    {term.value}
                  </option>
                )
              })}
            </Select>
          </InputWrapFull>
          <InputWrapFull>
            <Label>Rent (pcm)</Label>
            <Input type="number" />
          </InputWrapFull>
        </FormLayout>
      </FlexContainer>
      <ButtonGroup alignment="right">
        <Button type="submit" intent="low" onClick={onModalClose}>
          Close
        </Button>
        <Button chevronRight intent="primary">
          Create Clone
        </Button>
      </ButtonGroup>
    </Modal>
  )
}
