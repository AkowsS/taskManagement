import React from 'react';
import { Container, DeletIcon, TitleIcon, DivIcon} from './MenuItems.styles';
import { useDispatch, useSelector } from "react-redux";
import { removeProject, changeProject } from "../../store/projectSlicer";
import trashIcon from "../../assets/icons/lixo.png";
import newProjectIcon from "../../assets/icons/new-page.png";
import weekIcon from "../../assets/icons/calendario.png";
import inboxIcon from "../../assets/icons/caixaDeEntrada.png";
import todayIcon from "../../assets/icons/hoje.png";
import { RootState } from 'store';

interface MenuItemsProps {
  id: number;
  title: string;
  quantity?: number;
  delet: boolean;
}

export const MenuItems: React.FC<MenuItemsProps> = ({
  id,
  title,
  quantity,
  delet,
}) => {
  const pageOption = useSelector((state:RootState) => state.project.activeProject);
  const dispatch = useDispatch();
  const onDeleteButtonClick = () => {    
    if (confirm("Tem certeza que deseja apagar o projeto?"))
      dispatch(removeProject(id));
  };
  const onNewProjectSelect = (id:number) => {
    dispatch(changeProject(id));
  };
  const onIconTitleChoice =(id:number) => {
    if(id == 0 ){
      return inboxIcon;
    }else if (id == 1){
      return todayIcon;
    }else if (id == 2){
      return weekIcon;
    }else if (id >= 3){
      return newProjectIcon;
    }
  }
  
  return (
    <Container onClick={()=>onNewProjectSelect(id)}>
      <button className={pageOption === id? "active":""}>
        <DivIcon>
          <TitleIcon src={onIconTitleChoice(id)}/>
          <p>{title}</p>
        </DivIcon>
      {delet?
        <DeletIcon onClick={onDeleteButtonClick} src={trashIcon}/>
        :""
      }
      </button>
    </Container>
  )
};