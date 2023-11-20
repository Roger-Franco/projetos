import Link from 'next/link'
import React from 'react'
import useAuth from '../../data/hook/useAuth'
import Image from "next/image"

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props:AvatarUsuarioProps) {
  const {usuario} = useAuth()
  // console.log(usuario?.imagemUrl, 'usuario?.imagemUrl')
  return (
    <Link href="/perfil">
      <Image 
      src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
      alt="Avatar do Usuário" 
      height={40}
      width={40}
      className={`
      h-10 w-10 rounded-full cursor-pointer
      ${props.className}
      `}
      />
      {/* <img 
      src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
      alt="Avatar do Usuário" 
      className={`
      h-10 w-10 rounded-full cursor-pointer
      ${props.className}
      `}
      /> */}
    </Link>
  )
}
