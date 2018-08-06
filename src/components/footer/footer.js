import React from 'react'
import { Subtitle } from '../typography/subtitle'
import { FooterItem } from './footer-item'
import { CONTACT } from '../../consts'

export const Footer = () => (
  <div style={{ paddingLeft: 56, paddingRight: 56,  backgroundColor: '#6202EE', height: 118, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
    <FooterItem icon="fas fa-envelope" label={CONTACT.email} link={`mailto:${CONTACT.email}`} />
    <Subtitle style={{ marginBottom: 0 }} color="#fff">Get in Touch</Subtitle>
    <FooterItem icon="fab fa-telegram-plane" label={CONTACT.telegram} link={`https://${CONTACT.telegram}`} />
  </div>
)