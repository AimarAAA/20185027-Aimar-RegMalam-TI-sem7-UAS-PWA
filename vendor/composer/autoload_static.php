<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita9cfa8b5d1d5a587bb5e2355faa68ea6
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kreait\\Firebase\\Tests\\' => 22,
            'Kreait\\Firebase\\' => 16,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kreait\\Firebase\\Tests\\' => 
        array (
            0 => __DIR__ . '/../..' . '/tests',
        ),
        'Kreait\\Firebase\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Firebase',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita9cfa8b5d1d5a587bb5e2355faa68ea6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita9cfa8b5d1d5a587bb5e2355faa68ea6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita9cfa8b5d1d5a587bb5e2355faa68ea6::$classMap;

        }, null, ClassLoader::class);
    }
}
