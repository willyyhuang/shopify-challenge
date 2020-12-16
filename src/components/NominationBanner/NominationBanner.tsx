import {Card, Typography, Row} from 'antd'
import React from 'react'
import {MovieType} from '../../views/BasicLayout'

const NominationBanner = ({
    nomination,
}: any) => <Card>
  <Typography.Title level={4}>Your movie nominations :)</Typography.Title>
  {nomination.map((item: MovieType) => <Row style={{marginTop: 5}}>
    <Typography.Text style={{marginTop: 5}}>
      {`- ${item.Title} - (${item.Year})`}
    </Typography.Text>
  </Row>)}
</Card>

NominationBanner.displayName = 'NominationBanner'
export default NominationBanner
