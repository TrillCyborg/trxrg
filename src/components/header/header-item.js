import React from 'react'
import styled from 'styled-components'
import { HeaderItem as Font } from '../typography/header-item'

const Wrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  user-select: none;
`

const ActiveLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6202EE;
  position: relative;
  top: 31px;
`

export const HeaderItem = ({ label, active, onClick }) => (
  <Wrapper onClick={onClick}>
    <Font style={{ marginTop: active ? 2 : 0 }}>{label}</Font>
    {active ? <ActiveLine /> : null}
  </Wrapper>
)