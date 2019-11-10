import styled from 'styled-components'

export const font = {
  size: {
    title: '24px',
    subtitle: '20px',
    p: '14px',
  }
}

export const color = {
  primary: '#FFDD47',
  seconadry: '#4775cb',
  text: '#4A4A4A',
  surface: '#9B9B9B',
}

export const Highlight = styled.strong`
  color: ${color.seconadry}
`
export const Section = styled.div`
  margin-top: 40px
`

export const Block = styled.div`
  margin-top: 20px
  transition: .1s
  .experience__info {
    margin: 30px 0
    transition: .3s
  }
  ul {
    padding: 0px
    list-style: none
  }
  &:hover {
    padding-left: 20px 
    border-left: 2px solid ${color.primary}
  }
  .project {
    padding-left: 20px
    list-style: disc
  }
`
export const Title = styled.div`
  position: relative;
  display: flex
  justify-content: space-between
  align-items: flex-end 
  text-decoration: none
  text-transform: uppercase;
  font-weight: 800;
  font-size: ${font.size.title};
  color: ${props => props.color || color.surface};
  border-bottom: 1px solid ${props => props.isProject ? color.text : 'none'};
  a {
    text-decoration: none
    text-transform: uppercase;
    font-weight: 800;
    font-size: ${font.size.title};
    color: ${props => props.color || color.surface};
    cursor: pointer
    &:hover {
      color: ${color.primary}
    }
  }
  p {
    display: inline-block
    font-size: ${font.size.p}
    margin: 0
  }
  &::before {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid yellow;
    top: 10px;
    left: -20px;
  }
`

export const Tag = styled.h2`
  font-size: 14px
  background: ${color.text}
  display: inline-block
  padding: 5px 10px
  color: white
`

export const Description = styled.p`
  color: ${color.text}
  margin: 0
`

export const Feature = styled.li`
  list-style: none
  color: ${color.text}
  &>* {
    margin-right: 10px
    display: inline-block
  }
`

export const Button = styled.a`
  text-transform: uppercase
  cursor: pointer
  background: ${color.primary}
  text-decoration: none
  color: ${color.text}
  font-size: ${font.size.p} 
  padding: 5px 10px
  margin-right: 10px
  transition: .2s
  &:hover {
    text-decoration: none
    background: ${color.seconadry}
    color: white
  } 
`

export const Link = styled.a`
  color: ${color.seconadry}
  text-decoration-line: underline
  cursor: pointer
  
`