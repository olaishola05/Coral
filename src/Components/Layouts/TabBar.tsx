import React from 'react'
import Box from '@mui/material/Box';
import { ReactComponent as BagIcon } from '../../Assets/svg/bag-black.svg';
import { ReactComponent as LineSpacingIcon } from '../../Assets/svg/linespacing.svg';
import { ReactComponent as CommentIcon } from '../../Assets/svg/comment.svg';
import { ReactComponent as AttachIcon } from '../../Assets/svg/attachment.svg';
import { ReactComponent as LinkIcon } from '../../Assets/svg/link.svg';
import { ReactComponent as ListIcon } from '../../Assets/svg/list.svg';

const TabBar = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  const tabStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
  }

  const arrTabs = [
    <BagIcon />,
    <LineSpacingIcon />,
    <CommentIcon />,
    <AttachIcon />,
    <LinkIcon />,
    <ListIcon />,
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '50px 0px 0px' }}>
      <Box sx={{ ...tabStyles }}>
        {arrTabs.map((tab, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              cursor: 'pointer',
              gap: '17.33px',
              color: activeTab === index ? 'primary.main' : '',
              '&:hover': {
                color: 'primary.main',
              },
            }}
            onClick={() => handleTabChange(index)}
          >
            {activeTab === index && <Box sx={{ width: '2px', height: '24px', backgroundColor: 'primary.main' }} />}
            {tab}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TabBar