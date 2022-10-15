import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Modal = ({ open, setOpen, children }) => {
    return (
        <AnimatePresence>
            { open && <>
                <motion.div
                    className='modal'
                    initial={{ transform: 'translate(-50%, -50%) scale(0)'}}
                    animate={{ transform: 'translate(-50%, -50%) scale(1)'}}
                    exit={{ transform: 'translate(-50%, -50%) scale(0)'}}
                    transition={{ duration: 0.3 }}
                >
                    <button className='modal__close-btn' onClick={() => setOpen(false)} />
                    { children }
                </motion.div>
                
                <motion.div 
                    className='modal-overlay'
                    onClick={() => setOpen(false)} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </>}
        </AnimatePresence>
    )
}

export default Modal