<?php

class Rectangle {

    private $w;
    private $h;

    public function __construct($w, $h)
    {
        $this->w = $w;
        $this->h = $h;
    }

    public function getW()
    {
        return $this->w;
    }
    
    public function setW($w)
    {
        $this->w = $w;
    }
}

$rect1 = new Rectangle(30, 50);